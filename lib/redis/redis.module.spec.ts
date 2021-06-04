import { RedisModule } from './redis.module';
import { RedisModuleAsyncOptions, RedisModuleOptions } from './interfaces';

describe(`${RedisModule.forRoot.name}`, () => {
    test('should register module without options', () => {
        expect(RedisModule.forRoot().module).toBe(RedisModule);
        expect(RedisModule.forRoot().imports).toHaveLength(1);
    });

    test('should register module with options', () => {
        const options: RedisModuleOptions = {
            defaultOptions: {}
        };

        expect(RedisModule.forRoot(options).module).toBe(RedisModule);
        expect(RedisModule.forRoot(options).imports).toHaveLength(1);
    });
});

describe(`${RedisModule.forRootAsync.name}`, () => {
    const options: RedisModuleAsyncOptions = {
        useFactory: () => ({}),
        inject: []
    };

    test('should register async module with async options', () => {
        expect(RedisModule.forRootAsync(options).module).toBe(RedisModule);
        expect(RedisModule.forRootAsync(options).imports).toHaveLength(1);
    });
});