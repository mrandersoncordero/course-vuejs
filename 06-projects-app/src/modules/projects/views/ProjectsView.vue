<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 2 -->
        <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
          <th>{{  index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td>
            <progress class="progress progress-primary w-56" value="10" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo Proyecto"
    subtitle="Dale un nombre unico a tu proyecto"
  />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1>Titulo del modal</h1>
    </template>
    <template #body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis iusto accusantium
        quisquam, doloremque alias aperiam neque. Soluta, excepturi incidunt!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end mt-5">
        <button @click="customModalOpen = false" class="btn mr-4">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <fab-button @click="modalOpen = true">
    <AddCircle />
  </fab-button>

  <fab-button @click="customModalOpen = true" position="bottom-left">
    <AddCircle />
  </fab-button>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../stores/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();

const onNewValue = (projectName: string) => {
  projectsStore.projectList.push({
    id: '3',
    name: projectName,
    tasks: []
  })
};
</script>
