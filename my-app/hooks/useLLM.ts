import { useState } from 'react';
import axios from 'axios';
const API_ENDPOINT = '';
interface UseInvokeBedrockModelResponse {
    data: any; // You can replace 'any' with a more specific type that matches your expected response
    error: Error | null;
    isLoading: boolean;
    invokeModel: (prompt: string) => Promise<void>;
}

export const useInvokeBedrockModel = (): UseInvokeBedrockModelResponse => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const invokeModel = async (prompt: string) => {
        setIsLoading(true);
        try {
            const response = await axios.post(API_ENDPOINT, {
                prompt: prompt,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setData(response.data);
            console.log(response.data);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error('Error response:', err.response);
                setError(new Error('An error occurred while fetching the data.'));
            } else {
                console.error('An unexpected error occurred:', err);
                setError(new Error('An unexpected error occurred.'));
            }
        } finally {
            setIsLoading(false);
        }
    };


    return { data, error, isLoading, invokeModel };
};
