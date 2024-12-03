from rest_framework.viewsets import ModelViewSet
from .models import Alumno, Curso, Profesor, Matricula
from .serializers import AlumnoSerializer, CursoSerializer, ProfesorSerializer, MatriculaSerializer

class AlumnoViewSet(ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

class CursoViewSet(ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class ProfesorViewSet(ModelViewSet):
    queryset = Profesor.objects.all()
    serializer_class = ProfesorSerializer

class MatriculaViewSet(ModelViewSet):
    queryset = Matricula.objects.all()
    serializer_class = MatriculaSerializer
