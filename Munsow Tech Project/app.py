from flask import Flask, request, render_template, send_file,jsonify
import validate_input
from validate_input import validate

app = Flask(__name__)

@app.route('/')
def home():
    print("We are at login Page")
    return render_template("register.html")

@app.route('/register',methods = ['POST'])
def login():
   data = request.get_json()
   email = data.get('email')
   password = data.get('username')
   username = data.get('username')
   
   if (validate(email)):
       return jsonify({
       "status":"sucess",
       "message":"We have a sucessful valid email"
        }),200
   else:
       return jsonify({
           "status":"failure",
           "message":"we have a fail email"
       })
       print()



if __name__ == '__main__':
    app.run(debug=True)