import Match from "../../value/match";
import SentencesIs from "../../message/sentences-is";

export default function Alphabet(
    valid : boolean,
    value : string,
    subject : string = 'string'
) : string {

    let sentence = new SentencesIs(valid);
    sentence.type.push('alphabet');
    sentence.value.push(subject);

    if(!valid) {

       let match = new Match(value, /[^a-zA-Z]{1,5}/);

       if(match.valid) {

           sentence.value.push(`..${match.match[0]}..`)
       }
    }

    return sentence.message;
}
