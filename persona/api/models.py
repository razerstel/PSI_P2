from django.db import models

class Persona(models.Model):
    
    id = models.AutoField(primary_key=True)
    
    nombre = models.CharField(
        max_length=200,
        help_text="Enter a person name",
    )
    apellido = models.CharField(
        max_length=200,
        help_text="Enter the person surname"
    )
    email = models.EmailField(unique=True)
    
    class Meta:
        ordering = ['id']
