pip3 install -r ../requirements2.txt
python3 manage.py makemigrations
python3 manage.py migrate
DJANGO_SUPERUSER_PASSWORD=alumnodb python manage.py createsuperuser --username alumnodb --email alumnodb@alumnodb.com --noinput
