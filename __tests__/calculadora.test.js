import { soma } from "../src/calculadora.js";
import { subtrai } from "../src/calculadora.js";

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
})

describe("Calculadora", () => {
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
})
