import test from 'ava';
import { serializePolicy } from '../../src/csp/mod.js';

{
    const testcaseList: Array<[title: string, input: Iterable<string | null>, expected: string]> = [
        // @prettier-ignore
        ['empty arguments', [], ``],
        ['some values', ['1', '2', '3'], `1; 2; 3`],
        ['some values contains null', ['1', null, '2', null, '3', null], `1; 2; 3`],
    ];
    for (const [title, input, expected] of testcaseList) {
        test(`serializePolicy: ${title}`, (t) => {
            const actual = serializePolicy(...input);
            t.is(actual as string, expected);
        });
    }
}
