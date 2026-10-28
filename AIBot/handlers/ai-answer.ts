import { BotContext } from "../types/bot-types";
import {askGemini} from "../services/api.ts"
import {markdownToHtml} from "../lib/formatMarkdown.ts"

export async function AiAnswerHandler(
    ctx: BotContext,
    next: () => Promise<void>

)  {
    const message = ctx.message?.text;

    if(!ctx.session.waitingForAI) {
        return next()
    }

    if(!message) {
        return next()
    }

    ctx.session.waitingForAI = false

    const ThinkingMessage = await ctx.reply('🤔 Думаю над відповіддю...')

    const safeDelete = () => ctx.api.deleteMessage(ctx.chat!.id, ThinkingMessage.message_id);

        try {
            const response = await askGemini(message)
            await ctx.reply(markdownToHtml(response), {parse_mode: "HTML"})
        } catch (error) {
            console.error(error)
            await ctx.reply("Виникла помилка при роботі з ШІ. Спробуйте пізніше")
        } finally {
            safeDelete()
        }

}