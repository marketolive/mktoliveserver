from flask import Flask
from flask_restful import Api
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.login import LoginManager

app = Flask(__name__)
api = Api(app)
app.config.from_object('config')
db = SQLAlchemy(app)
lm = LoginManager()
lm.init_app(app)

if app.config['FORCE_SSL'] and not app.debug:
  from flask_sslify import SSLify
  sslify = SSLify(app)

from app import views, models