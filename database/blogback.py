from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

blogback = Flask(__name__)
CORS(blogback)

basedir = os.path.abspath(os.path.dirname(__file__))
blogback.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'blogback.sqlite')
dat = SQLAlchemy(blogback)
mar = Marshmallow(blogback)

class Blogpost(dat.Model):
    id = dat.Column(dat.Integer, primary_key=True)
    title = dat.Column(dat.String(100), unique=False)
    desc = dat.Column(dat.String(300), unique=False)
    cats = dat.Column(dat.String(100), unique=False)
    theText = dat.Column(dat.String(4000), unique=False)

    def __init__(self, title, desc, cats, theText):
        self.title = title
        self.desc = desc
        self.cats = cats
        self.theText = theText


class BlogSchema(mar.Schema):
    class Meta:
        fields = ('title', 'desc', 'cats', 'theText')


blog_schema = BlogSchema()
blogs_schema = BlogSchema(many=True)

# New Post Endpoint
@blogback.route('/post', methods=["POST"])
def add_post():
    title = request.json['title']
    desc = request.json['desc']
    cats = request.json['cats']
    theText = request.json['theText']

    new_post = Blogpost(title, desc, cats, theText)

    dat.session.add(new_post)
    dat.session.commit()

    blogpost = Blogpost.query.get(new_post.id)

    return blog_schema.jsonify(blogpost)

# Update Post Endpoint
@blogback.route('/post/<id>', methods=["PUT"])
def post_update(id):
    blogpost = Blogpost.query.get(id)
    title = request.json['title']
    desc = request.json['desc']
    cats = request.json['cats']
    theText = request.json['theText']

    blogpost.title = title
    blogpost.desc = desc
    blogpost.cats = cats
    blogpost.theText = theText

    dat.session.commit()
    return blog_schema.jsonify(blogpost)

# Query All Posts Endpoint
@blogback.route('/posts', methods=["GET"])
def get_posts():
    all_posts = Blogpost.query.all()
    result = blogs_schema.dump(all_posts)
    return jsonify(result)

# Query One Post Endpoint
@blogback.route('/post/<id>', methods=["Get"])
def get_post(id):
    blogpost = Blogpost.query.get(id)
    return blog_schema.jsonify(blogpost)

# Delete Post Endpoint
@blogback.route('/post/<id>', methods=["DELETE"])
def delete_post(id):
    blogpost = Blogpost.query.get(id)
    dat.session.delete(blogpost)
    dat.session.commit()

    return "Post delete successful"


# @blogback.route('/')
# def greeting():
#     return "Meetings and farewells"

if __name__ == '__main__':
    blogback.run(debug=True)