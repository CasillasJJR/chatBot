
interface BotResponse {
  ok: boolean;
  answer: string;
}

export class PrologUseCase {

  static readonly prologUrl = import.meta.env.VITE_URL_PROLOG;

  static async sendMessage(question: string): Promise<BotResponse | null> {

    try {
        const resp = await fetch(PrologUseCase.prologUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
          }),
        });

        if ( !resp.ok ) throw new Error("Error obteniendo respuesta.");
        
        const data = await resp.json();

        return {
          ok: true,
          ...data
        };
    } catch (error) {
        console.log(error);
        return {
          ok: false,
          answer: "Error obteniendo respuesta."
        };
    }
  }
}
