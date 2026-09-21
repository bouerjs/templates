declare var require: {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): any;
};

declare module '*.html' {
  const value: string;
  export default value;
}

declare module '*.scss' {
  const value: string;
  export default value;
}

declare module '*.sass' {
  const value: string;
  export default value;
}

declare module '*.css' {
  const value: string;
  export default value;
}