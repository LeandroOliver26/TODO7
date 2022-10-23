const Calculadora = require("../model/Calculadora");

describe("testando operações da model",()=>{

    test("testando metodos de soma esperando retorno correto: valor do tipo number", async()=>{

        const soma = await Calculadora.soma(3,3);
        expect(soma).toBe(6)
        console.log(soma)
    })

    
    test("testando metodos de soma com erro", async()=>{
      try{
        const soma = await Calculadora.soma(3,"a");
      }
      catch(erro)
      {
        expect(erro).toBeTruthy()
      }
      
    })

    test("testando metodos de subtração esperando retorno correto: valor do tipo number", async()=>{

        const subtracao = await Calculadora.subtracao(8,3);
        expect(subtracao).toBe(5)
        console.log(subtracao)
    })

    test("testando metodos de subtracao com erro", async()=>{
        try{
          const subtrcao = await Calculadora.subtracao(5,"a");
        }
        catch(erro)
        {
          expect(erro).toBeTruthy()
        }
        
      })

      test("testando metodos de multiplicação esperando retorno correto: valor do tipo number", async()=>{

        const multiplicacao = await Calculadora.multiplicacao(8,3);
        expect(multiplicacao).toBe(24)
        console.log(multiplicacao)
    })

    test("testando metodos de multiplicação com erro", async()=>{
        try{
          const multiplicacao = await Calculadora.multiplicacao(6,"a");
        }
        catch(erro)
        {
          expect(erro).toBeTruthy()
        }
        
      })

      test("testando metodos de divisão esperando retorno correto: valor do tipo number", async()=>{

        const divisao = await Calculadora.divisao(15,3);
        expect(divisao).toBe(5)
        console.log(divisao)
    })

    test("testando metodos de divisão com erro", async()=>{
        try{
          const divisao = await Calculadora.divisao(6,"a");
        }
        catch(erro)
        {
          expect(erro).toBeTruthy()
        }
        
      })

})