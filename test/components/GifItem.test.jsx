import {GifItem} from "../../src/components/index.js";
import {render, screen} from "@testing-library/react";

describe("Pruebas en GifItem", function() {

    const title = "Titulo del gif"
    const url = "http.url.del.gif"

    test("Evaluar el snapshot", function() {
        const { container } = render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test("Debe de mostrar la imagen con el URL y el ALT indicado", function() {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(src);
        expect( alt ).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', ()=>{
        render(<GifItem title={title} url={url} />);
        expect(screen.getByRole('paragraph').innerHTML).toBe(title);
    });

})