import { BotContext } from "../types/bot-types";
import {Keyboard} from "grammy"

const keyboard = new Keyboard()
  .text('AI-помічник')
  .text('Генератор тестів')
  .text('Справка')
  .resized()
  .persistent()


export async function startHandler(ctx: BotContext) {
    const name = ctx.from?.first_name ?? "Brat"
    await ctx.reply(
        `Hello, ${name}!,

        Im your helper!

        /start - start work
        /ai - ask Ai
        /test - generate test on your topic 

        `, { reply_markup: keyboard }
    )
}