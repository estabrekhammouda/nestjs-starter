/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    service = module.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return health status', () => {
    const result = service.checkHealth();
    
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('timestamp');
    expect(result).toHaveProperty('uptime');
    expect(result).toHaveProperty('environment');
    
    expect(result.status).toBe('ok');
    expect(typeof result.uptime).toBe('number');
  });

  
  it('should return valid timestamp', () => {
    const result = service.checkHealth();
    const timestamp = new Date(result.timestamp);
    
    expect(timestamp).toBeInstanceOf(Date);
    expect(timestamp.toString()).not.toBe('Invalid Date');
  });
});
