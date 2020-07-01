import React from 'react';
import styled from "styled-components";

const PrivacyContent: React.FC = () => {  

    return (
      <>
        <TopText>
          Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat
          einen besonders hohen Stellenwert für die Geschäftsleitung der Buchhaltung Service
          Berlin. Eine Nutzung der Internetseiten der Buchhaltung Service Berlin ist
          grundsätzlich ohne jede Angabe personenbezogener Daten möglich.
          <p/>
          Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere
          Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung
          personenbezogener Daten erforderlich werden. Ist die Verarbeitung
          personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung
          keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen
          Person ein.
          <p/>
        </TopText>
        <RowWrapper>
          <LeftText>
            Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der
            Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt
            stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit
            den für die Buchhaltung Service Berlin geltenden landesspezifischen
            Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser
            Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen,
            genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden
            betroffene Personen mittels dieser Datenschutzerklärung über die ihnen
            zustehenden Rechte aufgeklärt.
          </LeftText>
          <RightText>
            Die Buchhaltung Service Berlin hat als für die Verarbeitung Verantwortlicher
            zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen
            möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten
            personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte
            Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein
            absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder
            betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen,
            beispielsweise telefonisch, an uns zu übermitteln.
          </RightText>
        </RowWrapper>
        <RowWrapper>
          <LeftText>
          1. Begriffsbestimmungen
          Die Datenschutzerklärung der Buchhaltung Service Berlin beruht auf den
          Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber
          beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden.
          Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere
          Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu
          gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
          <p/>
          Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden
          Begriffe:
          </LeftText>
          <RightText>
          `a) personenbezogene Daten
          <p/>
          Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
          identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als
          identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt,
          insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
          Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder
          mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen,
          genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
          natürlichen Person sind, identifiziert werden kann.`
          </RightText>
        </RowWrapper>
      </>
    )
};
const TopText = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;;
    color: #000000;
    max-width: 45vw;
    line-height: 20px;
    @media (max-width: 900px) {
      max-width: 85vw;
    }
`;
const LeftText = styled.div`
    margin: 2vh 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;;
    color: #000000;
    max-width: 45vw;
    line-height: 20px;
`;

const RightText = styled.div`
    margin-top: 2vh;
    margin-left: 3vw;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;;
    color: #000000;
    line-height: 20px;
    max-width: 40vw;

`;
const RowWrapper = styled.div`
  display:  flex;
  flex-direction: row;
`;
export default PrivacyContent;
