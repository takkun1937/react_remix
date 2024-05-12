import { JSX, useContext, useState } from 'react';
import { WorkSpaceContextType } from '../../type';
import { WorkSpaceContext } from '../../providers/workSpaceProvider';
import axios from 'axios';

/**
 * コーディング結果のコンポーネント
 * @returns
 */
export const Result = (): JSX.Element => {
  const workSpaceContext: WorkSpaceContextType = useContext(WorkSpaceContext);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // ソースコードコンパイルAPIの実行
  const handleCompile = () => {
    console.log(workSpaceContext.code);
    setIsRunning(true);
    const formData = {
      language_id: workSpaceContext.selectedLanguageOption.id,
      // encode source code in base64
      source_code: btoa(workSpaceContext.code),
    };
    const options = {
      method: 'POST',
      url: import.meta.env.VITE_APP_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        console.log(error);
      })
      .finally(() => {
        setIsRunning(false);
      });
  };

  // コンパイルAPIレスポンスのチェック
  const checkStatus = async (token: string) => {
    const options = {
      method: 'GET',
      url: import.meta.env.VITE_APP_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': import.meta.env.VITE_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        // setOutputDetails(response.data);
        // showSuccessToast(`Compiled Successfully!`);
        console.log('response.data', response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      // showErrorToast();
    }
  };

  return (
    <div className='grow h-full'>
      <h1>コーディング結果表示エリア</h1>
      <button onClick={handleCompile}>コンパイル</button>
    </div>
  );
};
