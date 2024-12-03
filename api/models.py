from django.db import models

# Create your models here.


class Alumno(models.Model):
    dni = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=30)
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=9)
    edad = models.PositiveIntegerField()

    # # Relación con curso a través de la tabla intermedia Matricula
    # cursos = models.ManyToManyField("Curso", through='Matricula')

    def datos_alumno(self):
        return "{}, {}".format(self.nombre, self.dni)

    def __str__(self):
        return self.datos_alumno()
