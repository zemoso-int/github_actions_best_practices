package com.zemoso.labs.service;

import com.zemoso.labs.dto.LabsDto;
import com.zemoso.labs.entity.Labs;
import com.zemoso.labs.exception.LabNotFoundException;
import com.zemoso.labs.mapper.LabsMapper;
import com.zemoso.labs.repository.LabsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LabsServiceImplementation implements LabsService{
    @Autowired
    LabsRepository labsRepository;
    @Autowired
    LabsMapper labsMapper;



    @Override
    public List<LabsDto> getAllLabs() {

        return getLabsDtoList(labsRepository.findAll());
    }

    @Override
    public LabsDto getLabById(int Id) {
        Optional<Labs> result=labsRepository.findById(Id);
        Labs labs=result.orElseThrow(()->new LabNotFoundException("Lab Not Found with Id-" + Id));
        return labsMapper.labsToLabsDto(labs);
    }



    private List<LabsDto> getLabsDtoList(List<Labs> labsList) {
        List<LabsDto> LabsDtos = new ArrayList<>();
        for (Labs lab : labsList) {
            LabsDtos.add(labsMapper.labsToLabsDto(lab));
        }
        return LabsDtos;
    }
}
