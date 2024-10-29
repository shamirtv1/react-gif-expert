import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

describe('Pruebas en el Hook useFetchGifs', () => {

    const category = 'One Punch';

    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook(()=> useFetchGifs(category) );

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {
        const {result} = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000,
            }
        )

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy()


    });

});