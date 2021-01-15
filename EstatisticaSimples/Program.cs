using System;

namespace EstatisticaSimples
{
    class Program
    {
        static void Main(string[] args)
        {
                int menor = 0;
                int maior = 0;
                int contador = 0;
                double media = 0;
                double soma = 0;
                int QuantNumero = 6;
                int[] numeros = new int[QuantNumero];

                Console.WriteLine("Informe números inteiros:");

                for (int i = 0; i < QuantNumero; i++)
                {
                    Console.WriteLine((i + 1) + "° número:");
                    numeros[i] = Convert.ToInt32(Console.ReadLine());
                    menor = numeros[0];

                    if (numeros[i] < menor)
                    {
                        menor = numeros[i];
                    }
                    else if (numeros[i] > maior)
                    {
                        maior = numeros[i];
                    }

                    for (int x = 0; x < numeros.Length; x++)
                    {
                        if (numeros[x] == numeros[x])
                        {
                            contador++;
                            break;
                        }
                    }

                    soma = soma + numeros[i];
                    media = soma / 6;


                }
                Console.WriteLine("O Valor mínimo é:" + menor);
                Console.WriteLine("O Valor máximo é:" + maior);
                Console.WriteLine("O Número de elementos na sequencia é:" + contador);
                Console.WriteLine("A média é:" + media);
        }
    }
}
