<template>
  <div class="w-full">
    <section class="m-4">
      <bread-crumbs :name="project?.name ?? 'No name'" />
    </section>

    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project?.tasks" :key="task.id" class="hover">
              <th>
                <input
                  type="checkbox"
                  :checked="!!task.completedAt"
                  class="checkbox checkbox-primary"
                  @change="projectStore.toggleTask(project?.id ?? '', task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt }}</td>
            </tr>

            <tr class="hover">
              <th></th>
              <td>
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 hover:opacity-100 focus:opacity-100 transition-all"
                  placeholder="Nueva Tarea"
                  v-model="newTask"
                  @keyup.enter="addtask"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import type { Project } from '../interfaces/projects.interface';
import { useProjectsStore } from '../stores/projects.store';
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();
const newTask = ref('');

const addtask = () => {
  if (!project.value) return;
  projectStore.addTaskToProject(project.value.id, newTask.value);
  newTask.value = '';
};

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id == props.id);

    if (!project.value) {
      router.replace({ name: 'home' });
    }
  },
  { immediate: true },
);
</script>
