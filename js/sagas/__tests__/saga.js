import {fetchMyPoems, fetchNetData} from '../../utils/HttpUtil';
import {call, put} from 'redux-saga/effects';
import {fetchContent} from '../content';
import {receiveContent} from '../../actions/content';
import {fetchMy} from '../my';
import {receiveMy} from '../../actions/my';

describe('Saga test', () => {

    it('content Saga test', () => {
        let contentUrl = 'https://github.com/';
        const generator = fetchContent({contentUrl});
        let contentData = call(fetchNetData, contentUrl);
        expect(generator.next().value).toEqual(contentData);
        expect(generator.next(contentData).value).toEqual(put(receiveContent(contentData)))
    })

    it('my Saga test', () => {
        let myUrl = 'https://github.com/';
        const generator = fetchMy({myUrl});
        let myData = call(fetchMyPoems, myUrl);
        expect(generator.next().value).toEqual(myData);
        expect(generator.next(myData).value).toEqual(put(receiveMy(myData)))
    })
})
