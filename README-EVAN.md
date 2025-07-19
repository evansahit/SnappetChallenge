# Snappet Challenge by Evan Sahit

This is project is my contribution for the Snappet Challenge where I built a dashboard to visualize the given dataset of exercises completed by students.
I've also included my notes for this project outlining my thought process (.pdf file at root of the project), in case anyone is interested.

## Steps to run get the project running locally

### Backend

The backend is a FastAPI (Python) project, so an installation of Python is required. This project is using Python 3.13. Follow the following steps:

0. Follow the necessary steps to install Python 3.13.

1. Navigate into the `/backend` folder. From the root of the project:

    - `$ cd backend`

2. Create a Python virtual environment called `venv` using the `venv` package:

    - `$ python -m venv venv`

3. Activate the newly created virtual environment:

    - On MacOS/ Linux: `$ source venv/bin/activate`
    - On Windows: `$ venv\Scripts\activate.bat`
    - If the virtual environment has been properly activated, you will see `(venv)` inside of your terminal at the start of the line, e.g. `$ (venv) evan@Evan-PC:~/dev/snappet/snappet-challenge/SnappetChallenge/backend$`
    - You can also double which which Python interpreter is being used by running `$ which python` on MacOS and Linux or `$ where python` on Windows. This should output the path to the Python interpreter used to create the virtual environment, e.g. `/home/evan/dev/snappet/snappet-challenge/SnappetChallenge/backend/venv/bin/python`.

4. Install the dependencies for FastAPI and Pandas into the virtual environment:

    - `$ pip install -r requirements.txt`

5. Run the backend FastAPI server:

    - `$ fastapi dev app/main.py`

### Frontend

The frontend is a React project scaffolded with Vite and using TypeScript and TailwindCSS. Follow the following steps.

0. Follow the necessary steps to install Node.js

1. Navigate into the `/frontend/snappet-challenge` folder. From the root of the project:

    - `$ cd frontend/snappet-challenge`

2. Install the dependencies for React and Rechart:

    - `$ npm i`

3. Run the React development server via Vite:

    - `$ npm run dev`
