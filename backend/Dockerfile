FROM tiangolo/uvicorn-gunicorn-fastapi:python3.10

RUN pip install --no-cache-dir uvicorn[standard]==0.18.3
RUN pip install --no-cache-dir gunicorn==20.1.0
RUN pip install --upgrade pip
RUN pip install emails
RUN pip install qrcode

COPY ./app ./app
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
