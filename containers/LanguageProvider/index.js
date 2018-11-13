import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import 'intl';
import { DEFAULT_LOCALE } from '../../constants/Locale';

export let intl;
export let locale = DEFAULT_LOCALE;

export class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    //alert(DEFAULT_LOCALE);
    locale = this.props.locale;

    intl = new IntlProvider({
      locale: locale,
      messages: this.props.messages[locale],
    }, {}).getChildContext().intl;

    return (
      <IntlProvider locale={locale} key={locale}
                    messages={this.props.messages[locale]}>
        {this.props.children}
      </IntlProvider>
    );
  }
}


const mapStateToProps = (state) => ({
  locale: state.getIn(['language', 'locale'])
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
