FROM python:3.7
EXPOSE 5000
WORKDIR /backend

COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY ./ ./

CMD ["python", "server.py"]