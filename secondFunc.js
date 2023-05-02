import { newComment } from "./script.js"
import { format } from "date-fns";

function correctDate(str) {
  const options = { 
    year: '2-digit', 
    month: 'numeric', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
} 
const realDate = format(new Date(task.created_at), 'dd/MM/yyyy hh:mm');
return realDate
}

function checkEnter(key) {
    if (key.code === "Enter" || key.code === "NumpadEnter") newComment();
    return;
}

function safeHtmlString(str) {
    str = str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
    return str;
}

export { correctDate, checkEnter, safeHtmlString, };