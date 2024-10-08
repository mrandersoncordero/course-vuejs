import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/projects.interface';
import { v4 as uuidv4 } from 'uuid';

const initialLoad = (): Project[] => {
  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [],
    },
    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [],
    },
  ];
};

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad());

  function addProject(name: string) {
    if (!name || name.length === 0) return;
    
    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
    console.log(projects.value);
  }

  return {
    // Properties
    // projects,

    // Getters
    projectList: computed(() => [...projects.value]),

    // Actions
    addProject,
  };
});
