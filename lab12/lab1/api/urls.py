from django.urls import path
from api import views

urlpatterns = [
    path('tasklists', views.getTaskLists),
    path('tasklists/<int:id>', views.getTaskListsById),
    path('tasklists/<int:id>/tasks', views.getTaskListsByIdTasks),
    path('tasks/<int:id>', views.getTasksById)
]