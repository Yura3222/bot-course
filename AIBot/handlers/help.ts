import { BotContext } from "../types/bot-types";

export async function HelpHandler(ctx: BotContext) {
    await ctx.reply(`
        /start - start work
        /ai - ask Ai
        /test - generate test on your topic 
        `)
}