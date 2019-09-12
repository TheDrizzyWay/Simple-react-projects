import React from 'react';
import styled from 'styled-components';
import SingleImage from './Image';
import feedsource from '../mockData';

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;

const ProfileDetails = styled.div`
  display: flex;
`;

const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;

const HeadingThreeText = styled.h3``;

const ParagraphText = styled.p`
  margin-right: 25px;
`;

const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileDetailsName = styled.div`
  text-align: left;
`;

const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const Profile = () => (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/P687867" />
        </ProfileDetailsLeft>
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>Jason Voorhees</HeadingThreeText>
            <EditProfileButton>Edit profile</EditProfileButton>
          </ProfileDetailsUsername>
          <ProfileDetailsMeta>
            <ParagraphText>
              <strong>5</strong> posts
            </ParagraphText>
            <ParagraphText>
              <strong>296</strong> followers
            </ParagraphText>
            <ParagraphText>
              <strong>269</strong> following
            </ParagraphText>
          </ProfileDetailsMeta>
          <ProfileDetailsName>
            <ParagraphText>
              <strong>User</strong>
            </ParagraphText>
          </ProfileDetailsName>
        </ProfileDetailsRight>
      </ProfileDetails>
      <ImagesWrapper>
        {feedsource.map(item => (
          <SingleImage image={item} key={item.id} />
        ))}
      </ImagesWrapper>
    </ProfileContainer>
);

export default Profile;
