import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";
import {string} from "prop-types";

jest.mock("../../src/hooks/useFetchGifs.js");

const category = 'One Punch';

describe("Pruebas en GifGrid", () => {

    test("Debe de mostrar el Loading inicialmente", () => {

        useFetchGifs.mockReturnValue({ images: [], isLoading: true })
        render(<GifGrid category={category} />)
        expect(screen.getByRole('progressbar')).toBeTruthy()

    });

    test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {

        const gifs = [
            { id: 'ABC', title: 'ABC', url: 'ABC' },
            { id: 'BCD', title: 'BCD', url: 'BCD' }
        ]

        useFetchGifs.mockReturnValue({ images: gifs, isLoading: false })

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2)

    })

});