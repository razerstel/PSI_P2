from django.contrib import admin
from .models import Persona

# Register your models here.
class PersonaInLine(admin.TabularInline):
    model = Persona
