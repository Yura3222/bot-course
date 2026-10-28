import "dotenv/config"
import {Bot, session} from "grammy"
import { BotContext } from "./bot-types"
import {startHandler} from "../handlers/start.ts"
import {AiAnswerHandler} from  "../handlers/ai-answer.ts"
import {HelpHandler} from "../handlers/help.ts"
import type { SessionData } from "./bot-types"


const BOT_TOKEN = process.env.BOT_TOKEN


if(!BOT_TOKEN) {
    throw new Error("Bot token is not ser in .env file")
}

export const bot = new Bot<BotContext>(BOT_TOKEN)

bot.use(session({
    initial: (): SessionData => ({
        waitingForAI: false
    })
}))

bot.command("start", startHandler);

bot.hears("AI-помічник", async (ctx) => {
    ctx.session.waitingForAI = true
    await ctx.reply("💡 Напиши своє запитання")
})
bot.hears("Генератор тестів")
bot.hears("Справка", HelpHandler)

bot.on("message:text", AiAnswerHandler);

