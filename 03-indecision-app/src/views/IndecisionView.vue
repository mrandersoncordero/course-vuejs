<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- MessageBox -->
    <MessageBox />
  </div>
</template>

<script lang="ts" setup>
import ChatMessages from '@/chat/ChatMessages.vue';
import MessageBox from '@/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-messages.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola mundo',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Quieres ir a tomar cafe?',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 2,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/10-d5ddf3f82134e781c1175614c0d2bab2.gif',
  },
]);
</script>
