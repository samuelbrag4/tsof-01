import { soma, subtrai, multiplica, divide, potencia, raizQuadrada, raizCubica } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 5;
        const b = 10;

        // Act (Executar)
        const resultado = soma(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(15);
    })

    test("Deve subtrair dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 10;
        const b = 5;

        // Act (Executar)
        const resultado = subtrai(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(5);
    })

    test("Deve multiplicar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 5;
        const b = 10;

        // Act (Executar)
        const resultado = multiplica(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(50);
    })

    test("Deve dividir dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 10;
        const b = 5;

        // Act (Executar)
        const resultado = divide(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(2);
    })

    test("Deve calcular a potência corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const base = 2;
        const expoente = 3;

        // Act (Executar)
        const resultado = potencia(base, expoente);

        // Assert (Verificar)
        expect(resultado).toBe(8);
    })

    test("Deve calcular a raiz quadrada corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const numero = 16;

        // Act (Executar)
        const resultado = raizQuadrada(numero);

        // Assert (Verificar)
        expect(resultado).toBe(4);
    })

    test("Deve calcular a raiz cúbica corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const numero = 27;

        // Act (Executar)
        const resultado = raizCubica(numero);

        // Assert (Verificar)
        expect(resultado).toBe(3);
    })
})
