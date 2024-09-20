<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-messages.interface';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(
  () => props.messages,
  (newMessages, oldMessages) => {
    console.log('messages cambio', newMessages.length);

    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  },
  { deep: true },
);
</script>
