from django.db import models
from django.core.exceptions import ValidationError


class Alumno(models.Model):
    dni = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=30, default="Desconocido")
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=9)
    edad = models.PositiveIntegerField()
    # Relación con curso a través de la tabla intermedia Matricula
    cursos = models.ManyToManyField("Curso", through='Matricula') 

    def __str__(self):
        return self.nombre


class Curso(models.Model):
    codigo = models.CharField(max_length=10, unique=True)
    horas = models.PositiveIntegerField()
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()  # antes programa
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    seccion = models.CharField(max_length=20)  # antes numero
    profesor = models.ForeignKey('Profesor', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.nombre

class Profesor(models.Model):
    dni = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=30)
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=9)
    
    def datos_profesor(self):
        return "{}, {}".format(self.nombre, self.dni)
    
    def __str__(self):
        return self.datos_profesor()
    
    class Meta:
        verbose_name = 'Profesor'
        verbose_name_plural = 'Profesores'
        db_table = 'profesor'
        ordering = ['nombre']


class Matricula(models.Model):
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    fecha_matricula = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.alumno} matriculado en {self.curso} el {self.fecha_matricula}"
