import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-messages.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.interfaces';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponser = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length == 0) return;
    if (text == '' || text == ' ') return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    // Evaluar si termina con un ?
    if (!text.endsWith('?')) return;
    await sleep(1.5);

    const { answer, image } = await getHerResponser();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };
  return {
    // Properties
    messages,
    // Methods
    onMessage,
  };
};
