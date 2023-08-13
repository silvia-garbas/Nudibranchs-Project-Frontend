/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  // Temp roots: ["<rootDir>/src"],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist', '.d.ts', '.js'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/assetsMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/main.tsx',
    '<rootDir>/src/vite-env.d.ts',
    '<rootDir>/src/components/form',
    '<rootDir>/src/features/components/app/App.tsx',
    // '<rootDir>/src/core/services/api.repository.ts',
    '<rootDir>/src/features/components/list/List.tsx',
    '<rootDir>/src/features/components/nudibranchs/NudibranchsForm.tsx',
    // '<rootDir>/src/features/hooks/use.nudibranchs.ts',
    '<rootDir>/src/features/components/editForm/EditNudibranchForm.tsx',
    '<rootDir>/src/features/components/filter/Filter.tsx',
  ],
};
