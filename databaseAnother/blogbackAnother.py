from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
cors = CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False)
    desc = db.Column(db.String(200), unique=False)
    category = db.Column(db.String(200), unique=False)
    text = db.Column(db.String(5000), unique=False)

    def __init__(self, title, desc, category, text):
        self.title = title
        self.desc = desc
        self.category = category
        self.text = text


class PostSchema(ma.Schema):
    class Meta:
        fields = ('title', 'desc', 'category', 'text')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

# Endpoint to Create a New post
@app.route('/post', methods=['POST'])
def add_post():
    title = request.json['title']
    desc = request.json['desc']
    category = request.json['category']
    text = request.json['text']
    new_post = Post(title, desc, category, text)

    db.session.add(new_post)
    db.session.commit()

    post = Post.query.get(new_post.id)
    return post_schema.jsonify(post)

# Endpoint to query all posts
@app.route('/posts', methods=['GET'])
def get_posts():
    all_posts = Post.query.all()
    result = posts_schema.dump(all_posts)
    return jsonify(result)

# Endpoint to query one post
@app.route('/post/<id>', methods=['GET'])
def get_post(id):
    post = Post.query.get(id)
    return post_schema.jsonify(post)

# Endpoint to update a post
@app.route('/post/<id>', methods=['PUT'])
def update_post(id):
    post = Post.query.get(id)
    title = request.json['title']
    desc = request.json['desc']
    category = request.json['category']
    text = request.json['text']
    new_post = Post(title, desc, category, text)

    post.title = title
    post.desc = desc
    post.category = category
    post.text = text

    db.session.commit()
    return post_schema.jsonify(post)

# Endpoint to delete a post
@app.route('/post/<id>', methods=['DELETE'])
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()

    return 'Post was successfully deleted!'


if __name__ == '__main__':
    app.run(debug=True)
