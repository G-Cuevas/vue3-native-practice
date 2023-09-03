import breakingBadApi from '../../api/breakingBad.api';
import { onMounted, ref } from 'vue';
import axios from 'axios';

export interface quote {
    quote: string;
    author: string;
}

const quotes = ref<quote[]>([]);
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);
const errorMessage = ref<string>('');

export const useQuotes = () => {
    
    onMounted(async () => {
        await loadQuotes();
    });
    
    const loadQuotes = async () => {
        if (quotes.value.length > 0) return;

        try {
            const { data } = await breakingBadApi.get<quote[]>('/5');
            quotes.value = data;
            isLoading.value = false;

        } catch (error) {
            isLoading.value = false;
            isError.value = true;

            if (axios.isAxiosError(error)) {
                errorMessage.value = error.message;
            } else {
                errorMessage.value = JSON.stringify(error);
            }
        }
    }

    return {
        quotes,
        isLoading,
        isError,
        errorMessage,
    }
} 