import { useState } from 'react';
import { SymbolIcon } from '@symbol/stencil-component-react';

import './styles.scss';

interface Props {
  icon: string;
  type: string;
}

type TypeImport = 'HTML' | 'React';

const ModalDetailIcon = ({
  icon,
  type
}: Props) => {
  const [typeImport, setTypeImport] = useState<TypeImport>('HTML');

  return (
    <div className="content-modal">
      <div className="modal">
        <div className="modal-header">
          <h2>{icon}</h2>
          <div></div>
        </div>

        <div className="modal-body">
          <div className="content-icon">
            <SymbolIcon 
              name={icon} 
              iconClass="symbol-xl" 
              type={type}
              class="icon"
            />
          </div>

          <div className="content-code">
            <ul>
              <li 
                onClick={() => setTypeImport('HTML')}
                className={typeImport === 'HTML' ? 'selected' : ''}
              >
                HTML
              </li>
              <li 
                onClick={() => setTypeImport('React')}
                className={typeImport === 'React' ? 'selected' : ''}
              >
                React/Angular
              </li>
            </ul>
            <div className="code-snippet">
              <div className="code-snippet-block">
                <pre>
                  <code>
                    {typeImport === 'HTML' && (
                      <>
                        <span className="token">
                          <span className="punctuation">{'<'}</span>
                          i&nbsp;
                          <span className="attr-name">class</span>
                          <span className="attr-value">
                            <span className="punctuation">=</span>
                            <span className="punctuation">"</span>
                            {icon}
                            <span className="punctuation">"</span>
                          </span>
                          <span className="punctuation">{'>'}</span>
                        </span>
                        <span className="token">
                          <span className="punctuation">{'</'}</span>
                          i
                          <span className="punctuation">{'>'}</span>
                        </span>
                      </>
                    )}

                    {typeImport === 'React' && (
                      <span className="token">
                        <span className="punctuation">{'<'}</span>
                        SymbolIcon&nbsp;
                        <span className="attr-name">name</span>
                        <span className="attr-value">
                          <span className="punctuation">=</span>
                          <span className="punctuation">"</span>
                          {icon}
                          <span className="punctuation">"</span>
                        </span>
                        {type && (
                          <>
                            &nbsp;
                            <span className="attr-name">type</span>
                            <span className="attr-value">
                              <span className="punctuation">=</span>
                              <span className="punctuation">"</span>
                              {type}
                              <span className="punctuation">"</span>
                            </span>
                          </>
                        )}
                        &nbsp;
                        <span className="punctuation">{'/>'}</span>
                      </span>
                    )}
                  </code>
                </pre>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default ModalDetailIcon;
