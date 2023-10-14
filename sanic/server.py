from sanic import Sanic
from sanic.response import text
from sanic_cors import CORS, cross_origin

app = Sanic(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api", methods=['GET', 'OPTIONS'])
def list_users(request):
  return text("user example")