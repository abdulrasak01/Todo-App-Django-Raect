from django.db import models

class Todo(models.Model):
    item = models.CharField(max_length=20)
    checked = models.BooleanField(default=False)
        
