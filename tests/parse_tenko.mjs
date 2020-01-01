function testTenko(tenko, code, testVariant, enableAnnexb) {
  return tenko(
    code,
    {
      goalMode: testVariant === 'module',
      collectTokens: 0,
      strictMode: testVariant === 'strict',
      webCompat: enableAnnexb || testVariant === 'web',
      // targetEsVersion: tob.inputOptions.es,
      babelCompat: false,
      acornCompat: false,

      $log: () => {},
      $warn: () => {},
      $error: () => {},
    },
  );
}

export {
  testTenko,
};
