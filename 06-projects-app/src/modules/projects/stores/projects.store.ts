import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/projects.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects',  []));

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
