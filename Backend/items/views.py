from django.shortcuts import render
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

@api_view(["GET","POST"])
def items(request):
    if request.method == "GET":
        todos = Todo.objects.all()
        serializers = TodoSerializers(todos,many = True)
        return Response(serializers.data)
    
    elif request.method == "POST":
        serializers = TodoSerializers(data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data,status = status.HTTP_201_CREATED)
        return Response(serializers.error,status=status.HTTP_400_BAD_REQUEST)
            




@api_view(["GET","PUT","PATCH","DELETE"])
def detail(request,pk):
    todos = get_object_or_404(Todo,id=pk)
    if request.method == "GET":
            
        serializers = TodoSerializers(todos)
        return Response(serializers.data)
        
    elif request.method == "PUT":
            serializers = TodoSerializers(todos,data = request.data)
            if serializers.is_valid():
                serializers.save()
                return Response(serializers.data)
            return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == "DELETE":
        todos.delete()
        return Response("Item deleted!")
            
    
        
    # todos = Todo.objects.get(id=pk)
    # serializers = TodoSerializers(todos,data = request.data)
  

    
